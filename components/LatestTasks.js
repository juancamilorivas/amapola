import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ArrowRight as ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import dayjs from "dayjs";

const statusMap = {
  activa: { label: "Activa", color: "warning" },
  proceso: { label: "En proceso", color: "error" },
  terminada: { label: "Terminada", color: "success" },
};

const priorityMap = {
  normal: { label: "Normal", color: "warning" },
  moderada: { label: "Moderada", color: "error" },
  urgente: { label: "Urgente", color: "success" },
};

export default function LatestTasks({ tasks = [], sx }) {
  const router = useRouter();

  const handleRowClick = (taskId) => {
    router.push(`/task/${taskId}`);
  };

  return (
    <Card
      sx={{
        ...sx,
        width: { xs: "375px", sm: "500px", md: "1000px" },
      }}
    >
      <CardHeader title="Tareas" />
      <Divider />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Tarea</TableCell>
              <TableCell>Asignacion</TableCell>
              <TableCell sortDirection="desc">Fecha creacion</TableCell>
              <TableCell sortDirection="desc">Fecha vencimiento</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Prioridad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => {
              const { label, color } = statusMap[task.status] || {
                label: "Unknown",
                color: "default",
              };

              const { label: priorityLabel, color: priorityColor } = priorityMap[
                task.prioridad
              ] || {
                label: "Unknown",
                color: "default",
              };

              return (
                <TableRow
                  hover
                  key={task.id}
                  onClick={() => handleRowClick(task.id)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell
                    sx={{
                      maxWidth: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.title}
                  </TableCell>


                  <TableCell
                    sx={{
                      maxWidth: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.assignedTo}
                  </TableCell>



                  <TableCell
                    sx={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.description}
                  </TableCell>

                  <TableCell
                    sx={{
                      maxWidth: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {dayjs(task.createdAt).format("MMM D, YYYY")}
                  </TableCell>

                  <TableCell
                    sx={{
                      maxWidth: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {dayjs(task.vencimiento).format("MMM D, YYYY")}
                  </TableCell>

                  <TableCell
                    sx={{
                      maxWidth: "150px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Chip
                      color={color}
                      label={label}
                      size="small"
                      sx={{ width: "100px", textAlign: "center" }}
                    />
                  </TableCell>

                  {/* <TableCell
                      sx={{
                        maxWidth: "150px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Chip
                        color={colorr}
                        label={labell}
                        size="small"
                        sx={{ width: "100px", textAlign: "center" }}
                      />
                    </TableCell> */}

                  <TableCell
                    sx={{
                      maxWidth: "150px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Chip
                      color={priorityColor}
                      label={priorityLabel}
                      size="small"
                      sx={{ width: "100px", textAlign: "center" }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
          onClick={() => router.push("/tasks")}
        >
          Ver todas
        </Button>
      </CardActions>
    </Card>
  );
}
