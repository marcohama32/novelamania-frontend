// roleHelper.js
export function hasRole(userRoles, requiredRoles) {
    return userRoles.some(role => requiredRoles.includes(role));
  }