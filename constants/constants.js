export const MORNING_TIMES = [
	{ time: "06:00" },
	{ time: "06:30" },
	{ time: "07:00" },
	{ time: "07:30" },
	{ time: "08:00" },
	{ time: "08:30" },
	{ time: "09:00" },
	{ time: "09:30" },
	{ time: "10:00" },
	{ time: "10:30" },
	{ time: "11:00" },
	{ time: "11:30" },
	{ time: "12:00" },
];

export const AFTERNOON_TIMES = [
	{ time: "12:00" },
	{ time: "12:30" },
	{ time: "13:00" },
	{ time: "13:30" },
	{ time: "14:00" },
	{ time: "14:30" },
	{ time: "15:00" },
	{ time: "15:30" },
	{ time: "16:00" },
	{ time: "16:30" },
	{ time: "17:00" },
	{ time: "17:30" },
	{ time: "18:00" },
];

export const MORNING_WORKING_HOURS = {
	start: "07:30",
	end: "12:00",
};

export const AFTERNOON_WORKING_HOURS = {
	start: "14:00",
	end: "17:30",
};

const findIndex = (timesList, time) => {
	return timesList
		.map(function (e) {
			return e.time;
		})
		.indexOf(time);
};

export const filteredWorkingHours = (timesList, start, end) => {
	return timesList.slice(
		findIndex(timesList, start),
		findIndex(timesList, end)
	);
};
