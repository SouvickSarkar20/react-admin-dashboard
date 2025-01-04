import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

const SalesChannelChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

			<div className='h-80'>
				<ResponsiveContainer>
					<BarChart data={SALES_CHANNEL_DATA}>
                        
                        {/* 1.it sets the bargraph first property brings the background or the graph
                        2.x-axis will contain the name from the array
                        3.y-axis is set to default numbering  */}
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />

                        {/* 1.Tooltip is used to show additional info regarding the bar when we hover above it 
                        2.Here it will show the value of x-axis and y-axis
                        3.First property is contentstyle which is a simple js object used to add styles
                        4.itemStyle is used to style individual elements in the info container displayed by the tooltip */}
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>

						<Legend />

						<Bar dataKey={"value"} fill='#8884d8'>
							{SALES_CHANNEL_DATA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
                        
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesChannelChart;