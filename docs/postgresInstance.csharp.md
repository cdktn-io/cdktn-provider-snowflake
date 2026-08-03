# `postgresInstance` Submodule <a name="`postgresInstance` Submodule" id="@cdktn/provider-snowflake.postgresInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresInstance <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance snowflake_postgres_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstance(Construct Scope, string Id, PostgresInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability">ResetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart">ResetMaintenanceWindowStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings">ResetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration">ResetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(PostgresInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetHighAvailability` <a name="ResetHighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability"></a>

```csharp
private void ResetHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindowStart` <a name="ResetMaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart"></a>

```csharp
private void ResetMaintenanceWindowStart()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy"></a>

```csharp
private void ResetNetworkPolicy()
```

##### `ResetPostgresSettings` <a name="ResetPostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings"></a>

```csharp
private void ResetPostgresSettings()
```

##### `ResetStorageIntegration` <a name="ResetStorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration"></a>

```csharp
private void ResetStorageIntegration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresInstance.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PostgresInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput">AuthenticationAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput">ComputeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput">HighAvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput">MaintenanceWindowStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput">PostgresSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput">PostgresVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput">StorageIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput">StorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily">ComputeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability">HighAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy">NetworkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings">PostgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion">PostgresVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration">StorageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb">StorageSizeGb</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput"></a>

```csharp
public PostgresInstanceDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput"></a>

```csharp
public PostgresInstanceShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts"></a>

```csharp
public PostgresInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a>

---

##### `AuthenticationAuthorityInput`<sup>Optional</sup> <a name="AuthenticationAuthorityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput"></a>

```csharp
public string AuthenticationAuthorityInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ComputeFamilyInput`<sup>Optional</sup> <a name="ComputeFamilyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput"></a>

```csharp
public string ComputeFamilyInput { get; }
```

- *Type:* string

---

##### `HighAvailabilityInput`<sup>Optional</sup> <a name="HighAvailabilityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput"></a>

```csharp
public string HighAvailabilityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowStartInput`<sup>Optional</sup> <a name="MaintenanceWindowStartInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput"></a>

```csharp
public double MaintenanceWindowStartInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput"></a>

```csharp
public string NetworkPolicyInput { get; }
```

- *Type:* string

---

##### `PostgresSettingsInput`<sup>Optional</sup> <a name="PostgresSettingsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput"></a>

```csharp
public string PostgresSettingsInput { get; }
```

- *Type:* string

---

##### `PostgresVersionInput`<sup>Optional</sup> <a name="PostgresVersionInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput"></a>

```csharp
public double PostgresVersionInput { get; }
```

- *Type:* double

---

##### `StorageIntegrationInput`<sup>Optional</sup> <a name="StorageIntegrationInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput"></a>

```csharp
public string StorageIntegrationInput { get; }
```

- *Type:* string

---

##### `StorageSizeGbInput`<sup>Optional</sup> <a name="StorageSizeGbInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput"></a>

```csharp
public double StorageSizeGbInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|PostgresInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority"></a>

```csharp
public string AuthenticationAuthority { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily"></a>

```csharp
public string ComputeFamily { get; }
```

- *Type:* string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability"></a>

```csharp
public string HighAvailability { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart"></a>

```csharp
public double MaintenanceWindowStart { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy"></a>

```csharp
public string NetworkPolicy { get; }
```

- *Type:* string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings"></a>

```csharp
public string PostgresSettings { get; }
```

- *Type:* string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion"></a>

```csharp
public double PostgresVersion { get; }
```

- *Type:* double

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration"></a>

```csharp
public string StorageIntegration { get; }
```

- *Type:* string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb"></a>

```csharp
public double StorageSizeGb { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresInstanceConfig <a name="PostgresInstanceConfig" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthenticationAuthority,
    string ComputeFamily,
    string Name,
    double PostgresVersion,
    double StorageSizeGb,
    string Comment = null,
    string HighAvailability = null,
    string Id = null,
    double MaintenanceWindowStart = null,
    string NetworkPolicy = null,
    string PostgresSettings = null,
    string StorageIntegration = null,
    PostgresInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>string</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily">ComputeFamily</a></code> | <code>string</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion">PostgresVersion</a></code> | <code>double</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb">StorageSizeGb</a></code> | <code>double</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability">HighAvailability</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>string</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings">PostgresSettings</a></code> | <code>string</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration">StorageIntegration</a></code> | <code>string</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority"></a>

```csharp
public string AuthenticationAuthority { get; set; }
```

- *Type:* string

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily"></a>

```csharp
public string ComputeFamily { get; set; }
```

- *Type:* string

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion"></a>

```csharp
public double PostgresVersion { get; set; }
```

- *Type:* double

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb"></a>

```csharp
public double StorageSizeGb { get; set; }
```

- *Type:* double

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `HighAvailability`<sup>Optional</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability"></a>

```csharp
public string HighAvailability { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowStart`<sup>Optional</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart"></a>

```csharp
public double MaintenanceWindowStart { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy"></a>

```csharp
public string NetworkPolicy { get; set; }
```

- *Type:* string

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `PostgresSettings`<sup>Optional</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings"></a>

```csharp
public string PostgresSettings { get; set; }
```

- *Type:* string

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `StorageIntegration`<sup>Optional</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration"></a>

```csharp
public string StorageIntegration { get; set; }
```

- *Type:* string

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts"></a>

```csharp
public PostgresInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

### PostgresInstanceDescribeOutput <a name="PostgresInstanceDescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceDescribeOutput {

};
```


### PostgresInstanceShowOutput <a name="PostgresInstanceShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceShowOutput {

};
```


### PostgresInstanceTimeouts <a name="PostgresInstanceTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#create PostgresInstance#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#delete PostgresInstance#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#read PostgresInstance#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#update PostgresInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresInstanceDescribeOutputList <a name="PostgresInstanceDescribeOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get"></a>

```csharp
private PostgresInstanceDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PostgresInstanceDescribeOutputOutputReference <a name="PostgresInstanceDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily">ComputeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability">HighAvailability</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy">NetworkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings">PostgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion">PostgresVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier">PrivatelinkServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime">RetentionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration">StorageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority"></a>

```csharp
public string AuthenticationAuthority { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily"></a>

```csharp
public string ComputeFamily { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability"></a>

```csharp
public IResolvable HighAvailability { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart"></a>

```csharp
public double MaintenanceWindowStart { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy"></a>

```csharp
public string NetworkPolicy { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings"></a>

```csharp
public string PostgresSettings { get; }
```

- *Type:* string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion"></a>

```csharp
public double PostgresVersion { get; }
```

- *Type:* double

---

##### `PrivatelinkServiceIdentifier`<sup>Required</sup> <a name="PrivatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```csharp
public string PrivatelinkServiceIdentifier { get; }
```

- *Type:* string

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime"></a>

```csharp
public double RetentionTime { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration"></a>

```csharp
public string StorageIntegration { get; }
```

- *Type:* string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb"></a>

```csharp
public double StorageSizeGb { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public PostgresInstanceDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a>

---


### PostgresInstanceShowOutputList <a name="PostgresInstanceShowOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get"></a>

```csharp
private PostgresInstanceShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PostgresInstanceShowOutputOutputReference <a name="PostgresInstanceShowOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily">ComputeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa">IsHa</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings">PostgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion">PostgresVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier">PrivatelinkServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime">RetentionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize">StorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority"></a>

```csharp
public string AuthenticationAuthority { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily"></a>

```csharp
public string ComputeFamily { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IsHa`<sup>Required</sup> <a name="IsHa" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa"></a>

```csharp
public IResolvable IsHa { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings"></a>

```csharp
public string PostgresSettings { get; }
```

- *Type:* string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion"></a>

```csharp
public string PostgresVersion { get; }
```

- *Type:* string

---

##### `PrivatelinkServiceIdentifier`<sup>Required</sup> <a name="PrivatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```csharp
public string PrivatelinkServiceIdentifier { get; }
```

- *Type:* string

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime"></a>

```csharp
public double RetentionTime { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize"></a>

```csharp
public double StorageSize { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue"></a>

```csharp
public PostgresInstanceShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a>

---


### PostgresInstanceTimeoutsOutputReference <a name="PostgresInstanceTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---



