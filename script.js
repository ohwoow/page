const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsPanel = document.querySelectorAll('.tabs__panel')

function init(i) {
  tabsBtn.forEach(btn => {
    btn.classList.remove('tabs--active')
  })
  tabsPanel.forEach(panel => {
    panel.classList.remove('tabs--active')
  })
  tabsBtn[i].classList.add('tabs--active')
  tabsPanel[i].classList.add('tabs--active')
}
tabsBtn.forEach((btn, i) => {

  btn.addEventListener('click', (e) => {
    init(i)
  })
})