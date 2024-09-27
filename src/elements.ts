export const navbarButton =
  document.querySelector<HTMLButtonElement>("nav button")!

export const navbarSearchInput = document.querySelector<HTMLInputElement>(
  "nav input[type='search'"
)!

export const imagesContainer = document.querySelector(".image-container")!

export const loadMoreBtn =
  document.querySelector<HTMLButtonElement>(".load-more-btn")!

export const submitFormWrapper = document.querySelector<HTMLDivElement>(
  ".submit-form-wrapper"
)!

export const submitFormCancelBtn = document.querySelector<HTMLButtonElement>(
  ".buttons button[type='button']"
)!

export const submitForm =
  submitFormWrapper.querySelector<HTMLFormElement>("form")!
