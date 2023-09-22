// importamos la base de datos que, por ahora, es solo un archivo JSON, algo muy similar a lo que haciamos en Angular, hasta tener la base de datos de verdad.
const DB = require('./db.json');
const { saveToDatabase } = require('./utils')

// metodos;

// GET ALL
const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch(error) {
    throw {status: 500, message: error};
  }
};

// GET ONE
const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout without the id '${workoutId}'`
      }
    }
    return workout;
  } catch(error) {
    throw {status: error?.status || 500, message: error?.message || error};
  }
};

// POST new workout
const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${newWorkout.name}' already exists`,
      };
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);

    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

// UPDATE
const updateOneWorkout = (workoutId, changes) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//DELETE
const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//Exports
module.exports = { 
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}