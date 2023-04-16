import swal from 'sweetalert2';

// success
export function success(title?: string, text?: string) {
  swal.fire({
    title: title,
    text: text,
    icon: 'success',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
  });
}

// Info
export function info(title?: string, text?: string) {
  swal.fire({
    title: title,
    text: text,
    icon: 'info',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
  });
}

// Warning
export function warning(title?: string, text?: string) {
  swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
  });
}

// WarningHtml
export function warningHtml(title?: string, text?: any) {
  swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    html:
      '<ul style="list-style: none">' + text + '</ul>',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
  });
}

// Error
export function error(title?: string, text?: string) {
  swal.fire({
    title: title,
    text: text,
    icon: 'error',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
  });
}

export async function confirmSuccess(title?: string, text?: string, confirmButtonText?: string) {
  return swal.fire({
    title: title,
    text: text,
    icon: 'success',
    showCancelButton: false,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: confirmButtonText,
    customClass: {
      confirmButton: 'btn btn-success',
    },
    buttonsStyling: false,
  })
}

// Confirm Text
export async function confirm(title?: string, text?: string, confirmButtonText?: string) {
  return swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: confirmButtonText,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    },
    buttonsStyling: false,
  })/*.then(function (result) {   // then kısmını component içinde al
    if (result.value) {
      swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        customClass: {
          confirmButton: 'btn btn-success'
        },
      })
    }
  });*/
}


export async function alertTextarea() {
  return swal.fire({
    title: 'Can you briefly explain why you want to delete it?',
    input: 'textarea',
    inputPlaceholder: '',
    showCancelButton: false,
    confirmButtonColor: '#2F8BE6',
    confirmButtonText: 'Yes ',
    customClass: {
      confirmButton: 'btn btn-primary',
    },
    buttonsStyling: false,
  })
}

