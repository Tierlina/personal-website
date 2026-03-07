interface TabProps {
    description: string;
}

const Tab = ({ description }: TabProps) => {
    return (
        <section>
            <div className="flex items-end">
                <h2 className="px-3 py-1 bg-lavender rounded-b-none rounded-lg border-b-transparent border-[5px] border-softblack">
                    {description}
                </h2>

                {/* <div className=" w-[100vw] flex-1 border-t-[5px] border-softblack"></div> */}
            </div>
        </section>
    );
}

export default Tab;