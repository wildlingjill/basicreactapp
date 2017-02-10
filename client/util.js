
export const formatName = (person) => {
	return person.firstName + " " + person.lastName;
};

// fetch only available in newer browsers but can polyfill for older browsers
export const getJSON = () => {
	return fetch("/json").then(function(response){
    	return response.json();
	});
}
