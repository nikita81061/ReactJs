import React, {useState} from 'react';
import {Column, Table} from "react-virtualized";
import 'react-virtualized/styles.css';
import {Link} from "@mui/material";
import {Picture} from "./Picture";

export const ReactVirtualizedTable = ({photos}) => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const showPhoto = (event) => {
        let image = photos.find(photo => photo.thumbnailUrl === event.target.textContent).url;
        setImage(image);
        setOpen(true);
    }

    return (
        <div>
            <Table
                width={800}
                height={400}
                headerHeight={20}
                rowHeight={30}
                rowCount={photos.length}
                rowGetter={({index}) => photos[index]}>
                <Column label="Id" dataKey="id" width={50}/>
                <Column label="Title" dataKey="title" width={350}/>
                <Column width={300} label="Thumbnail" dataKey="thumbnailUrl"
                        cellRenderer={({cellData}) =>
                            <Link component="button" onClick={showPhoto}>
                                {cellData}
                            </Link>}>
                </Column>
            </Table>
            <Picture open={open} setOpen={setOpen} image={image}/>
        </div>
    );
};