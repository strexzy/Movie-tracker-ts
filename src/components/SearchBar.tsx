import { Input } from "./ui/Input.tsx";
import { useForm } from "react-hook-form";
import { useMovie } from "../context/MovieContext";
import { useState } from "react";
import MovieSearchList from "./MovieSearchList";
import type { TIsVisible, IFormTypes } from "../types/components";

const SearchBar = () => {
  const { search, getSearch } = useMovie();
  const [isVisible, setIsVisible] = useState<TIsVisible>(false);

  const { register, handleSubmit } = useForm<IFormTypes>();

  const onSubmit = async ({ searchField }: IFormTypes): Promise<void> => {
    const q = searchField.trim();
    try {
      await getSearch(q);
      setIsVisible(true);
    } catch (error) {
      throw new Error("Search failed");
    }
  };

  return (
    <div className="w-157.5">
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="🔍 Search a movie or a series"
          {...register("searchField")}
        />
        {isVisible && (
          <div className="absolute">
            <MovieSearchList visibilityChanger={setIsVisible} search={search} />
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
