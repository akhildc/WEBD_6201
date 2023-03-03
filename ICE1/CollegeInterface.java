package webd4201johnsunnya;

/**
 * @author Akhil John Sunny
 * @date January 19 2023
 */

public interface CollegeInterface {
	/**
	 * Name of the college
	 */
	public static final String COLLEGE_NAME = "Durham College";
	/**
	 * Phone number of college
	 */
	public static final String 	PHONE_NUMBER  = "(905)721-2000";
	
	/**
     * The Minimum Allowed ID Number
     */
    public static final long MINIMUM_ID_NUMBER = 100000000L;
    /**
     * The Maximum allowed ID Number
     */
    public static final long MAXIMUM_ID_NUMBER = 999999999L;
	
	/**
     * Returns the user type depending on the child class it is called.
     * @return String User type
     */
    public abstract String getTypeForDisplay();

}
