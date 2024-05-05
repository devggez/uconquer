"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Flex, Text, Button } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex className="mt-6">
      <Text mr="3" className="pt-1">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        color="gray"
        ml="1"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage((currentPage = 1))}
      >
        <DoubleArrowLeftIcon></DoubleArrowLeftIcon>
      </Button>
      <Button
        color="gray"
        ml="1"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeftIcon></ChevronLeftIcon>
      </Button>
      <Button
        color="gray"
        ml="1"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRightIcon></ChevronRightIcon>
      </Button>
      <Button
        color="gray"
        ml="1"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage = pageCount)}
      >
        <DoubleArrowRightIcon></DoubleArrowRightIcon>
      </Button>
    </Flex>
  );
};

export default Pagination;
