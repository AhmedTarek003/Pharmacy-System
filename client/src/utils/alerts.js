import Swal from "sweetalert2";

export function deleteAlert(deleteFun, id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteFun(id);
    }
  });
}

export function confirmAlert(confirmFun, id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You want recevie that!",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, confirm it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await confirmFun(id);
    }
  });
}
