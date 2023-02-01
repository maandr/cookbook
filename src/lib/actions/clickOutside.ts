export function clickOutside(node: HTMLElement, onClick: () => void) {
  const handleClick = (event: MouseEvent) => {
    !node.contains(event.target as HTMLElement) && onClick && onClick()
  }
  document.addEventListener('click', handleClick, true)
  return {
    destroy: () => {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
