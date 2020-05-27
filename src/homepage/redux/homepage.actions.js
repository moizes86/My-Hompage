import HomepageTypes from './homepage.types';

export const onToggleNavbarDropdown = () => ({
    type: HomepageTypes.TOGGLE_NAVBAR_DROPDOWN,
});

export const onMounted = () => ({
    type: HomepageTypes.ON_MOUNTED
})