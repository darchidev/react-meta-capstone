import React from "react";
import { Form } from "react-router-dom";
import Layout from "../components/Layout";
import FormBlock from "../components/FormBlock";

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
	console.log(new Date().toDateString());
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
						<Form method="get" action="/" className="flex flex-col gap-4">
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
								className="my-10 px-8 py-2 bg-[#f4cd14] hover:bg-[#495C55] border border-transparent hover:border hover:border-[#495C55] hover:text-white rounded-3xl"
							>
								Reserve
							</button>
						</Form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Reservation;
