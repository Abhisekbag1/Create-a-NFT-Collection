// create a variable to hold your NFT's
let nftCount = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };
  nftCount++;
  return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + nftCount);
}

// call your functions below this line
const myNFTs = [];

const nft1 = mintNFT("NFT 1", "First NFT", "image1.jpg");
myNFTs.push(nft1);

const nft2 = mintNFT("NFT 2", "Second NFT", "image2.jpg");
myNFTs.push(nft2);

listNFTs(myNFTs);
getTotalSupply();
