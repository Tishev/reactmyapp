import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../store/gists/actions";
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/gists/selectors";

const Gists = () => {
  // const [gists, setGists] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const loading = useSelector(selectGistsLoading);
  const error = useSelector(selectGistsError);

  const requestGists = useCallback(async () => {
    dispatch(getAllGists());
    // setIsLoading(true);
    // try {
    //   const response = await fetch(API_URL_PUBLIC);
    //   if (!response.ok) {
    //     throw new Error(`Request failed with status ${response.status}`);
    //   }
    //   const result = await response.json();
    //   setGists(result);
    // } catch (e) {
    //   console.error(e);
    //   setError(true);
    // } finally {
    //   setIsLoading(false);
    // }
    //   fetch(API_URL_PUBLIC)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`Request failed with status ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then((result) => setGists(result))
    //     .catch((err) => {
    //       setError(true);
    //     })
    //     .finally(() => setIsLoading(false));
  }, []);
  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.descriptiom || "No description"}</li>,
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button
          style={{ width: "100px", height: "50px" }}
          onClick={requestGists}
        >
          Retry
        </button>
      </>
    );
  }

  return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;
