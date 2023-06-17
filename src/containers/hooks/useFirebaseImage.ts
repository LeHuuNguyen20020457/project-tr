import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import React, { useState, ChangeEvent } from 'react';

const useFirebaseImage = (setValue: any, getValues: any) => {
    const [progress, setProgress] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<boolean | string>('');

    if (!setValue || !getValues) return;

    const handleUploadImage = (file: File) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progressPercent);
                console.log('Upload is ' + progressPercent + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('nothing at all');
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setImageUrl(downloadURL);
                });
            },
        );
    };

    const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setValue('image', file.name);
        handleUploadImage(file);
    };

    const handleDeleteImage = () => {
        const storage = getStorage();

        // Create a reference to the file to delete
        const desertRef = ref(storage, 'images/' + getValues('image'));

        // Delete the file
        deleteObject(desertRef)
            .then(() => {
                setImageUrl(false);
                setProgress(0);
                console.log('File deleted successfully');
            })
            .catch((error) => {
                console.log('Uh-oh, an error occurred!');
            });
    };
    return { handleUploadImage, handleSelectImage, handleDeleteImage, progress, imageUrl };
};

export default useFirebaseImage;
