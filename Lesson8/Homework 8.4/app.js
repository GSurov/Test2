const images = [
  "https://picsum.photos/400/600?1",
  "https://picsum.photos/400/300?2",
  "https://picsum.photos/400/500?3",
  "https://picsum.photos/400/700?4",
  "https://picsum.photos/400/350?5",
  "https://picsum.photos/400/550?6",
  "https://picsum.photos/400/450?7",
  "https://picsum.photos/400/650?8",
  "https://picsum.photos/400/380?9",
  "https://picsum.photos/400/580?10"
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];
  gallery.appendChild(img);
}