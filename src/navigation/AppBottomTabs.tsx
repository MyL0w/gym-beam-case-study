import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AppBottomTabsParamList } from "@navigation/types";
import { AppStack } from "@navigation/AppStack";
import { CartScreen, ProfileScreen } from "@screens/index";
import { appBottomTabsScreenOptions, discoverTabOptions } from "@navigation/options";
import { CustomTabBar } from "@navigation/components/CustomTabBar";

const Tab = createBottomTabNavigator<AppBottomTabsParamList>();

const renderTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

export const AppBottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={appBottomTabsScreenOptions} tabBar={renderTabBar}>
            <Tab.Screen name="Discover" component={AppStack} options={discoverTabOptions}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
};
