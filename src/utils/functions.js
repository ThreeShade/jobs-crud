export function validator(name, value, value2) {
  switch (name) {
    case "jobTitle":
    case "location":
    case "remoteType":
    case "industry":
    case "companyName":
      if (value?.trim()?.length > 3) {
        return {
          [name]: null
        };
      } else {
        return {
          [name]: `Please enter valid ${name}`.toLocaleLowerCase()
        };
      }
    case "salary":
    case "experience":
      const min = isNaN(Number(value)) ? null : Number(value);
      const max = isNaN(Number(value2)) ? null : Number(value2);
      if (min && max) {
        if (min <= max) {
          return { [name]: { min: null, max: null } };
        } else {
          return {
            [name]: {
              max: null,
              min: `minimum ${name} should not be greater than max ${name}`
            }
          };
        }
      } else {
        return {
          [name]: {
            min: min > 0 ? null : `please enter minimum ${name}`,
            max: max > 0 ? null : `please enter maximum ${name}`
          }
        };
      }
    case "totalEmployee":
      if (value?.length > 0 && Number(value) > 0 && Number(value) < 1000000) {
        return {
          [name]: null
        };
      } else {
        return {
          [name]: `Please enter total employee`
        };
      }
    case "applyType":
      if (value?.length > 3) {
        return {
          [name]: null
        };
      } else {
        return {
          [name]: `Please select any one option`
        };
      }
    default:
      return {};
  }
}
