const SERVER_URL = import.meta.env["VITE_SERVER_URL"]

export type ImageType = {
  _id: string
  name: string
  image: string
  __v: number
}

export const getImages = async (limit = 0) => {
  const response = await fetch(`${SERVER_URL}/images?limit=${limit}`)
  const data: ImageType[] = await response.json()
  return data
}

export const getImagesByName = async (name: string) => {
  const response = await fetch(`${SERVER_URL}/collection/find/${name}`)
  const data: ImageType[] = await response.json()
  return data
}

export const getCollectionLength = async () => {
  const response = await fetch(`${SERVER_URL}/collection/length`)
  const data: number = await response.json()
  return data
}

export const downloadImageById = (id: string) => {
  window.open(`${SERVER_URL}/images/${id}/download`)
}

export const addImage = async (name: string, image: File) => {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("image", image)

  const response = await fetch(`${SERVER_URL}/images`, {
    method: "POST",
    body: formData,
  })

  return response.ok
}

export const deleteImageById = async (id: string) => {
  const response = await fetch(`${SERVER_URL}/images/${id}`, {
    method: "DELETE",
  })

  return response.ok
}
