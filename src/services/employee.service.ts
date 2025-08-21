import apiClient from "./httpsClient";

const employeeService = {
    getEmployees: async() => {
        try {
            const response = await apiClient.get("/Employee");
            if(response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Error fetching employees:", error);
            throw error;
        }
    },
    deleteEmployee: async(id: number) => {
        try{
            const response = await apiClient.delete(`/Employee/${id}`);
            if(response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Error deleting employee:", error);
            throw error;
        }
    }
}

export default employeeService;