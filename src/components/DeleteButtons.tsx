import React, { useState } from 'react';
import { ScaleButton, ScaleDivider, ScaleModal } from "@telekom/scale-components-react";

export default function DeleteButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <h1>Delete your chooses</h1>
            <ScaleDivider />

            <div className="flex flex-wrap justify-center gap-4 p-4">
                <ScaleButton onClick={openModal}>
                    Delete all alerts
                </ScaleButton>
                <ScaleModal heading="All your alerts have been successfully deleted" opened={isModalOpen}>
                    <p>If you want to reset them, you can do so using the table above</p>
                    <ScaleButton slot="action" variant="secondary" onClick={closeModal}>
                        Cancel
                    </ScaleButton>
                    <ScaleButton slot="action">
                        Primary Action
                    </ScaleButton>
                </ScaleModal>


                <ScaleButton onClick={openModal}>
                    Delete all symbols
                </ScaleButton>
                <ScaleModal heading="All your symbols have been successfully deleted" opened={isModalOpen}>
                    <p>Hello. Welcome. What a pleasure it is to have you.</p>
                    <ScaleButton slot="action" variant="secondary" onClick={closeModal}>
                        Cancel
                    </ScaleButton>
                    <ScaleButton slot="action">
                        Primary Action
                    </ScaleButton>
                </ScaleModal>
            </div>
        </>
    );
}
