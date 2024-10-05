import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const BucketSelector: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [open, setOpen] = React.useState(false);

    const myRef = React.useRef(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.includes('/')) {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const lorem = (
        <p>
            Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus
            congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum
            quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at.
        </p>
    );

    return (
        <div className="container">
            <div className='bucket-selector'>
                <p>Bucket Selector</p>
                <textarea onChange={handleChange} />

                <Modal
                    open={showPopup}
                    onClose={() => setShowPopup(false)}
                    // center
                    // container={myRef.current}
                >
                    <p>
                        Take a look with the devtools, you can see that the modal is inside
                        the div we are targeting and not at the end of the body tag.
                    </p>
                </Modal>
            </div>
            <div>
            <button className="button" onClick={() => setOpen(true)}>
                    Open modal
                </button>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <h2>Big modal</h2>
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                    {lorem}
                </Modal>
            </div>
            

        </div>

    );
};

export default BucketSelector;