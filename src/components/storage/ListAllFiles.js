import app from "../../firebase";
import { useState } from "react";
import { getStorage, ref, listAll, uploadBytes } from "firebase/storage";

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
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  // Create a reference under which you want to list
  const listRef = ref(storage, `/sales_data_csv_files`);
  const listItem = (e) => {
    console.log("listItem");
    setSearch(e.target.value);
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          console.log(itemRef);
          setData((arr) => [...arr, itemRef.name]);
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
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

        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white inline-flex items-center"
          >
            Search
          </label>
          <div className="relative inline-flex items-center">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={listItem}
            >
              Search
            </button>
          </div>
        </form>
        {data.map((val) => (
          <li key={val.toString()}>{val}</li>
        ))}
      </center>
    </div>
  );
}
