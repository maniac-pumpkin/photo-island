import { loadMoreBtn, imagesContainer, submitFormWrapper } from "./elements"
import { deleteImageById, downloadImageById, type ImageType } from "./services"

export function showAndHideForm(state: boolean) {
  if (state) submitFormWrapper.style.display = "flex"
  else submitFormWrapper.style.display = "none"
}

export function showAndHideLoadMoreBtn(state: boolean) {
  if (state) loadMoreBtn.style.display = "block"
  else loadMoreBtn.style.display = "none"
}

export function injectImgsIntoWrapper(imgs: ImageType[]) {
  imagesContainer.setHTMLUnsafe("")

  if (imgs.length === 0) {
    showAndHideLoadMoreBtn(false)
    return
  }

  showAndHideLoadMoreBtn(true)

  imgs.forEach((each) => {
    const imageWrapper = document.createElement("div")
    imageWrapper.className = "image-wrapper"

    const img = document.createElement("img")
    img.src = each.image
    img.alt = each.name

    const buttonWrapper = document.createElement("div")
    buttonWrapper.className = "buttons"

    const downloadButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    downloadButton.className = "download-btn"
    downloadButton.onclick = () => downloadImageById(each._id)
    downloadButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="#171a1f">
        <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
      </svg>
    `

    deleteButton.className = "delete-btn"
    deleteButton.onclick = async () => {
      const isOK = await deleteImageById(each._id)
      if (isOK) {
        alert("Image successfully deleted.")
        imageWrapper.style.display = "none"
      } else alert("Something went wrong.")
    }
    deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="#171a1f">
        <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
        <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
      </svg>
    `

    buttonWrapper.append(downloadButton, deleteButton)
    imageWrapper.append(img, buttonWrapper)
    imagesContainer.append(imageWrapper)
  })
}
