import { View, Text, Image, ImageSourcePropType } from "react-native"
import { Tabs, Redirect } from "expo-router"
import React from "react"

import { icons } from "../../constants"

// Define the TabIconProps type since this is typescript
type TabIconProps = {
	icon: ImageSourcePropType
	color: string
	name: string
	focused: boolean
}


// Create a TabIcon component
const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-center">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="!size-6"
			/>
			<Text
				className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
				style={{ color: color }}>
				{name}
			</Text>
		</View>
	)
}

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232533",
						height: 84,
					},
				}}>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.home as ImageSourcePropType}
								color={color}
								name="Home"
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: "Bookmark",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.bookmark as ImageSourcePropType}
								color={color}
								name="Bookmark"
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.plus as ImageSourcePropType}
								color={color}
								name="Create"
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile as ImageSourcePropType}
								color={color}
								name="Profile"
								focused={focused}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	)
}

export default TabsLayout
