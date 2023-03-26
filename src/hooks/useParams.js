const useParams = () => {
  const params = new URLSearchParams(window.location.search);
  const data = [
    "redirect_uri",
    "response_type",
    "client_id",
    "state",
    "scope",
  ].map((a) => [a, params.get(a)]);
  return {
    ...Object.fromEntries(data),
    is_valid: data.some(([_, a]) => !!a),
  };
};

export default useParams;
