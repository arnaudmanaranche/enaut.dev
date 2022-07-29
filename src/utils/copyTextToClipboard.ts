export async function copyTextToClipboard(text: string) {
  const blop = new Blob([text], {
    type: 'text/plain',
  })

  const data = [new ClipboardItem({ [blop.type]: blop })]

  await navigator.clipboard.write(data)
}
