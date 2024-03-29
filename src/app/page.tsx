export default function Page() {
	return (
		<>
			<section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
				<div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
					<h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
						Page
					</h1>
					<p className="max-w-[42rem] leading-normal  sm:text-xl sm:leading-8">
						This is an example content
					</p>
				</div>
			</section>
			<hr className="border-slate-200" />
		</>
	)
}
