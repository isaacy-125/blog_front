export function indexActionLogin() {
  return {
    type: 'y',
  }
}

export function indexActionNotLogin() {
  return {
    type: 'n',
  }
}

export function indexActionSetUserId(data) {
  return {
    type: 'setUserId',
    data: data,
  }
}

export function indexActionSetUserName(data) {
  return {
    type: 'setUserName',
    data: data,
  }
}

export function indexActionSetMenus(data) {
  return {
    type: 'setMenus',
    data: data,
  }
}