import { useState } from "react"

const usePopupState = (defaultOpen = false) => {
  const [isOpen, setOpen] = useState(defaultOpen)

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false)
  }
}

export default usePopupState