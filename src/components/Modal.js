import React from "react";

const Modal = ({ isOpen, closeModal, content }) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
			onClick={closeModal}
		>
			<div
				className="bg-[#495C55] p-4 rounded-lg w-fulllg:w-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				<span
					className="float-right text-gray-500 cursor-pointer"
					onClick={closeModal}
				>
					&times;
				</span>
				{content}
			</div>
		</div>
	);
};

export default Modal;
