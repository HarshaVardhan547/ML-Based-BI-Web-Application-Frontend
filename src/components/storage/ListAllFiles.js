import app, { db, auth } from "../../firebase";
import { useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";

// Find all the prefixes and items.
export function ListOfFiles() {
  const storage = getStorage(app);

  const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [search, setSearch] = useState("");

  const upload = () => {
    if (file == null) return;
    // Sending File to Firebase Storage
    const storageRef = ref(storage, `/sales_data_csv_files/${file.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then(
      (snapshot) => {
        console.log("Uploaded a blob or file!");
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // Sending File to Firebase Firestore
          addDoc(collection(db, "sales_data_csv_files"), {
            file_name: file.name,
            file_size: file.size,
            file_type: file.type,
            file_url: downloadURL,
          });
        });
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      }
    );
  };

  // Create a reference under which you want to list
  const listRef = ref(storage, `/sales_data_csv_files`);
  const listItem = async (e) => {
    console.log("listItem");
    console.log(e.target.value);
    setSearch(e.target.value);
    const q = query(
      collection(db, "sales_data_csv_files"),
      where("file_name", ">=", search),
      where("file_name", "<=", search + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setData((arr) => [...arr, doc.data()]);
    });
    // listAll(listRef)
    //   .then((res) => {
    //     res.prefixes.forEach((folderRef) => {
    //       // All the prefixes under listRef.
    //       // You may call listAll() recursively on them.
    //       console.log(folderRef);
    //     });
    //     res.items.forEach((itemRef) => {
    //       // All the items under listRef.
    //       //console.log(itemRef);
    //       setData((arr) => [...arr, itemRef.name]);
    //     });
    //   })
    //   .catch((error) => {
    //     // Uh-oh, an error occurred!
    //     console.log(error);
    //   });
  };
  return (
    <div className="ListAll" style={{ marginTop: 250 }}>
      <center>
        <input
          type="file"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={upload}
        >
          Upload
        </button>
        <br />

        {data.map((val, index) => (
          <li key={index}>{val.file_name}</li>
        ))}
      </center>
    </div>
  );
}
