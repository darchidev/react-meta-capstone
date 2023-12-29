import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import FormBlock from "../components/FormBlock";
import Modal from "../components/Modal";
import { FaCheck } from "react-icons/fa";

const Reservation = () => {
	const selectOpts = [
		{ name: "Anniversary", value: "anniversary" },
		{ name: "Birthday", value: "birthday" },
		{ name: "Other", value: "other" },
	];
	const seatsOpts = {
		min: 1,
		max: 20,
	};
	const defaultValues = {
		date: `${new Date().toLocaleDateString("en-CA")}`,
		time: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
		seats: 2,
		occasion: "anniversary",
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const openModal = () => {
		setIsModalOpen(true);
		setTimeout(() => {
			closeModal();
			navigate("/");
		}, 1600);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<Layout>
			<div className="w-full bg-[#495D56]">
				<div className="max-w-5xl mx-auto py-10 flex flex-col ">
					<h1 className="text-3xl text-white">Reserve a Table</h1>
				</div>
			</div>
			<div className="w-full bg-slate-50">
				<div className="max-w-5xl mx-auto py-10 flex flex-col">
					<div className="mx-auto max-w-md mt-10 w-full">
						<Form method="get" className="flex flex-col gap-4">
							<FormBlock
								label={"Date"}
								type={"date"}
								name={"date"}
								defaultValue={defaultValues.date}
							/>
							<FormBlock
								label={"Time"}
								type={"time"}
								name={"time"}
								defaultValue={defaultValues.time}
							/>
							<FormBlock
								label={"Seats"}
								type={"number"}
								name={"seats"}
								opts={seatsOpts}
								defaultValue={defaultValues.seats}
							/>
							<FormBlock
								label={"Occasion"}
								type={"select"}
								opts={selectOpts}
								name={"event"}
								defaultValue={defaultValues.occasion}
							/>
							<button
								type="submit"
								onClick={openModal}
								className="my-10 px-8 py-2 bg-[#f4cd14] hover:bg-[#495C55] border border-transparent hover:border hover:border-[#495C55] hover:text-white rounded-3xl"
							>
								Reserve
							</button>
						</Form>
					</div>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				closeModal={closeModal}
				content={
					<p className="text-xl flex justify-center gap-6 w-full my-10 text-center text-white ">
						{"The table has been successfully reserved! "}
						<FaCheck size={30} />
					</p>
				}
			/>
		</Layout>
	);
};

export default Reservation;
