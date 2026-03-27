<script lang="ts">
  let isVisible = $state(true)
</script>

{#if isVisible}
  <div
    class="no-repeat mx-auto flex max-w-[894px] flex-col rounded-[6px] border border-[#d1d9e0] bg-cover bg-center p-4"
    style="background-image: url('https://github.githubassets.com/images/modules/memexes/projects-beta-banner.png');"
  >
    <div class="flex items-start gap-10">
      <div>
        <h2 class="text-2xl font-bold">Welcome to Svelte</h2>
        <p class="mt-1 max-w-[55%] text-sm">
          Built to be flexible and adaptable, Projects gives you a live canvas
          to filter, sort, and group issues and pull requests in a table, board,
          or roadmap. Tailor them to your needs with custom fields, saved views,
          workflows, and insights.
        </p>
        <a
          href="#0"
          class="mt-4 inline-flex flex-row rounded-md border border-[#d1d9e0] bg-stone-100 px-4 py-[5px] text-sm leading-5 font-medium text-zinc-800"
          >Learn More</a
        >
      </div>

      <button
        type="button"
        class="shrink-0 cursor-pointer"
        onclick={() => (isVisible = false)}
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
        >
          <path
            d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
          ></path>
        </svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  </div>
{/if}
