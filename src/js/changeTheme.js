const checkbox = document.querySelector("#theme-switch-toggle");
const body = document.body;
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const { LIGHT, DARK } = Theme;

checkbox.addEventListener("change", changeTheme);

loadThemeFromLocalStorage();

function changeTheme(e) {
  e.target.checked
    ? changeThemeColor(DARK, LIGHT)
    : changeThemeColor(LIGHT, DARK);
}

function changeThemeColor(addColor, deleteColor) {
  body.classList.remove(deleteColor);
  body.classList.add(addColor);
  addThemeColorInLocalStorage(addColor);
}

function addThemeColorInLocalStorage(color) {
  localStorage.setItem("theme", color);
}

function loadThemeFromLocalStorage() {
  let localTheme = localStorage.getItem("theme");

  if (localTheme === null) return;

  localTheme === LIGHT
    ? changeThemeAndCheckbox(LIGHT, false)
    : changeThemeAndCheckbox(DARK, true);
}

function changeThemeAndCheckbox(themeColor, checkedPropery) {
  document.body.classList.add(themeColor);
  checkbox.checked = checkedPropery;
}
