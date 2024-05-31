/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _age, _phone, _issue_in_phone) {
  const NFT = {
    "name": _name,
    "age": _age,
    "phone": _phone,
    "issue_in_phone": _issue_in_phone
  };
  NFTs.push(NFT);
  console.log("Added: " + _name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\n ID \t" + (i + 1));
    console.log("name : " + NFTs[i].name);
    console.log("age : " + NFTs[i].age);
    console.log("phone : " + NFTs[i].phone);
    console.log("issue_in_phone : " + NFTs[i].issue_in_phone);
  }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(NFTs.length);
}
// call your functions below this line
mintNFT("viraj", "19", "xiomi", "broken temper");
mintNFT("dilraj", "26", "xiomi", "broken camera");
mintNFT("gurraj", "20", "xiomi", "sound problem");
mintNFT("lalraj", "25", "samsung", "broken camera");

listNFTs();
getTotalSupply();
