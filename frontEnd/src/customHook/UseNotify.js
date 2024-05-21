import { toast } from 'react-toastify'

// To make notification to a component
const notify = (msg, type) => {
  if (type === 'warn') { toast.warn(msg) } else if (type === 'error') { toast.error(msg) } else if (type === 'success') { toast.success(msg) }
}

export default notify
