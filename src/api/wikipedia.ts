export interface BirthsProps {
  year: number;
  text: string;
}

interface BirthsResponse {
  births: BirthsProps[];
}


export const fetchBirthdays = async (date = new Date()) => {
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const fetchUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

    const response = await fetch(fetchUrl);
    if (!response.ok) {
        throw new Error('Response failed');
    }
    const {births}: BirthsResponse = await response.json();
    return births.sort((a, b) => a.year - b.year);
};
