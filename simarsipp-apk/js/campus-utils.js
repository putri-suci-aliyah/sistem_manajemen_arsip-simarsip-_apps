(function(){
  // Canonicalize campus strings to improve matching for different formats.
  function canonicalCampus(v){
    if (typeof v !== 'string') return '';
    let s = v.trim();
    // If there is parenthesis like "Institut ... (IDE LPKIA)", prefer inner short name
    const m = s.match(/\(([^)]+)\)/);
    if (m && m[1]) {
      s = m[1].trim();
    } else if (s.indexOf(' - ') !== -1) {
      // If format like "IDE LPKIA - Jl. ...", take left part
      s = s.split(' - ')[0].trim();
    }
    return s.toLowerCase();
  }

  // Backwards-compatible alias
  function normalizeCampus(v){ return canonicalCampus(v); }

  function getLoggedUser(){ try { return JSON.parse(localStorage.getItem('loggedUser')||'null'); } catch(e){ return null; } }
  function getUserCampus(user){ const u = user || getLoggedUser(); return canonicalCampus(u && (u.kampus || u.campus) ? (u.kampus || u.campus) : null); }
  function getUserOrg(user){ const u = user || getLoggedUser(); return typeof (u && (u.organisasi || u.organization)) === 'string' ? (u.organisasi || u.organization).trim().toLowerCase() : null; }

  // Prefer campus-only matching: if userCampus present, match by campus only.
  // If userCampus is not present, fall back to organization matching.
  function belongsToUserCampusOrOrg(item, userCampus, userOrg){
    const itemCampus = canonicalCampus(item && (item.campus || item.kampus) ? (item.campus || item.kampus) : null);
    const itemOrgRaw = item && (item.organisasi || item.organization) ? (item.organisasi || item.organization) : null;
    const itemOrg = typeof itemOrgRaw === 'string' ? itemOrgRaw.trim().toLowerCase() : null;

    if (userCampus) {
      // If user has campus defined, require campus match (allow substring match)
      if (itemCampus && (itemCampus === userCampus || itemCampus.indexOf(userCampus) !== -1 || userCampus.indexOf(itemCampus) !== -1)) return true;
      return false; // do not fallback to org when userCampus is set
    }

    // Fallback: no userCampus configured, try org matching
    if (userOrg && itemOrg && (itemOrg === userOrg || itemOrg.indexOf(userOrg) !== -1 || userOrg.indexOf(itemOrg) !== -1)) return true;
    return false;
  }

  window.normalizeCampus = normalizeCampus;
  window.getLoggedUser = getLoggedUser;
  window.getUserCampus = getUserCampus;
  window.getUserOrg = getUserOrg;
  window.belongsToUserCampusOrOrg = belongsToUserCampusOrOrg;
})();
