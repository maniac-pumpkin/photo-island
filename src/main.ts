import {
  submitForm,
  loadMoreBtn,
  navbarButton,
  navbarSearchInput,
  submitFormCancelBtn,
} from "./elements"
import {
  addImage,
  getImages,
  getImagesByName,
  getCollectionLength,
} from "./services"
import {
  showAndHideForm,
  injectImgsIntoWrapper,
  showAndHideLoadMoreBtn,
} from "./utils"
import "./styles/style.css"

let limit = 6
let timeout: number

navbarButton.onclick = () => showAndHideForm(true)

navbarSearchInput.oninput = (event) => {
  const input = event.currentTarget as HTMLInputElement
  clearTimeout(timeout)
  timeout = setTimeout(async () => {
    if (input.value === "") {
      const imgs = await getImages(limit)
      injectImgsIntoWrapper(imgs)
      showAndHideLoadMoreBtn(true)
      return
    }
    const imagesByName = await getImagesByName(input.value.toLowerCase())
    injectImgsIntoWrapper(imagesByName)
    showAndHideLoadMoreBtn(false)
  }, 1500)
}

loadMoreBtn.onclick = async () => {
  const currentLength = await getCollectionLength()
  if (currentLength <= limit) {
    showAndHideLoadMoreBtn(false)
    return
  }
  limit += 3
  const imgs = await getImages(limit)
  injectImgsIntoWrapper(imgs)
}

window.onload = async () => {
  const imgs = await getImages(limit)
  injectImgsIntoWrapper(imgs)
}

submitFormCancelBtn.onclick = () => showAndHideForm(false)

submitForm.onsubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget as HTMLFormElement)
  const inputTextValue = formData.get("input-text") as string
  const inputFile = formData.get("input-file") as File

  const isOK = await addImage(inputTextValue, inputFile)
  if (isOK) {
    alert("Image successfully uploaded.")
    showAndHideForm(false)
  } else alert("Something went wrong.")
}
