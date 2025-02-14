<!-- Accept in 5 variavles to make a project component
    1. date
    2. title
    3.tech stack
    4. description
    5. status(online, offline, in progress)
-->

<script>
  /**
   * @type {string}
   */
  export let date;
  /**
   * @type {string}
   */
  export let title;

  /**
   * @type {string[]}
   */
  export let tech;

  /**
   * @type {string}
   */
  export let description;
  export let status;
  let statusColor =
    status === "online"
      ? "bg-green-500"
      : status === "offline"
        ? "bg-red-500"
        : "bg-yellow-500";
  let statusBg = 
    status === "online"
    ? "bg-green-700"
    : status === "offline"
    ? "bg-red-700"
    : "bg-yellow-700";
  let statusText =
    status === "online"
      ? "Online"
      : status === "offline"
        ? "Offline"
        : "In Progress";
</script>

<div class="flex flex-row items-start w-full gap-24">
  <div class="*:">
    {date}
  </div>
  <div class="flex flex-col items-start space-y-4">
    <h1 class="text-lg font-semibold">{title}</h1>
    <div class={`flex flex-row items-center space-x-4 rounded-xl px-2 py-0.5 ${statusBg} `}  >
      <div class={`w-2 h-2 rounded-full ${statusColor}`}></div>
      <p class="text-xs">{statusText}</p>
    </div>
    <p class="text-xs text-purple-300">
      {tech.map((/** @type {string} */ t, /** @type {number} */ i) => {
        return i === tech.length - 1 ? " "+t : " "+t ;
      })}
    </p>
    <p class="text-lg text-gray-500">{description}</p>
  </div>

</div>

<style>
  .bg-green-500 {
    background-color: #34d399;
  }
  .bg-red-500 {
    background-color: #ef4444;
  }
  .bg-yellow-500 {
    background-color: #fbbf24;
  }
</style>
