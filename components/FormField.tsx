import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ImageSourcePropType,
} from "react-native"
import React, { useState } from "react"
import { icons } from "../constants"

type FormFieldProps = {
	title: string
	value: string
	placeholder?: string
	handleChangeText: (e: string) => void
	otherStyles?: string
	keyboardType?: string
	[key: string]: any
}

const FormField: React.FC<FormFieldProps> = ({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyles,
	keyboardType,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>

			<View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
				<TextInput
					className="flex-1 text-white font-psemibold text-base"
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7B7B8B"
					onChangeText={handleChangeText}
					secureTextEntry={title === "Password" && !showPassword}
					{...props}
				/>

				{title === "Password" && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image
							source={
								(!showPassword
									? icons.eye
									: icons.eyeHide) as ImageSourcePropType
							}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

export default FormField
