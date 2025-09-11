import axios from "axios";

export async function handleSignUpSubmit(
  e: React.FormEvent<HTMLFormElement>,
  showThankYouModal: () => void,
  closeFormModal: () => void
) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  // Extracting all form data
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const gender = formData.get("gender") as string;
  const dob = formData.get("dob") as string;
  const age = formData.get("age") as string;
  const profession = formData.get("profession") as string;

  const meals = formData.getAll("meals");
  const duration = formData.get("duration") as string;
  const differentPlan = formData.get("differentPlan") as string;

  const lunchPlan = formData.get("lunchPlan") as string;
  const dinnerPlan = formData.get("dinnerPlan") as string;
  const combinedPlan = formData.get("combinedPlan") as string;

  const lunchAddress = formData.get("lunchAddress") as string;
  const lunchLandmark = formData.get("lunchLandmark") as string;
  const dinnerAddress = formData.get("dinnerAddress") as string;
  const dinnerLandmark = formData.get("dinnerLandmark") as string;

  const extraRoti = formData.get("extraRoti") as string;
  const additionalInfo = formData.get("additionalInfo") as string;

  const formJson = {
    fullName: `${firstName} ${lastName}`,
    dob,
    age,
    gender,
    email,
    phone,
    profession,
    meals,
    duration,
    differentPlan,
    lunchPlan,
    dinnerPlan,
    combinedPlan,
    lunchAddress,
    lunchLandmark,
    dinnerAddress,
    dinnerLandmark,
    extraRoti,
    additionalInfo,
  };

  try {
    console.log("Submitting Form Data:", formJson);
    await axios.post("http://82.29.165.42:5000/submitForm", formJson);

    // Close the form modal before showing thank you modal
    closeFormModal();         // ✅ close the form modal
    showThankYouModal();      // ✅ open thank you modal
  } catch (error) {
    alert("Error submitting form. Please check the console.");
    console.error("Form Submission Error:", error);
  }
}
