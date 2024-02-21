import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const sweetalert = (component: any) => {
  MySwal.fire({
    html: component,
    showConfirmButton: false,
    showCloseButton: true,
    position: 'top-left',
    background: "#ededed",
    backdrop: 'transparent',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInLeft
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutLeft
        animate__faster
      `
    }
  });
};
