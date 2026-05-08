# `tableConstraint` Submodule <a name="`tableConstraint` Submodule" id="@cdktn/provider-snowflake.tableConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableConstraint <a name="TableConstraint" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint snowflake_table_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraint(Construct Scope, string Id, TableConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties">PutForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable">ResetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties">ResetForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetInitially">ResetInitially</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetRely">ResetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutForeignKeyProperties` <a name="PutForeignKeyProperties" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties"></a>

```csharp
private void PutForeignKeyProperties(TableConstraintForeignKeyProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.putTimeouts"></a>

```csharp
private void PutTimeouts(TableConstraintTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDeferrable` <a name="ResetDeferrable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable"></a>

```csharp
private void ResetDeferrable()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetEnforced"></a>

```csharp
private void ResetEnforced()
```

##### `ResetForeignKeyProperties` <a name="ResetForeignKeyProperties" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties"></a>

```csharp
private void ResetForeignKeyProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitially` <a name="ResetInitially" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetInitially"></a>

```csharp
private void ResetInitially()
```

##### `ResetRely` <a name="ResetRely" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetRely"></a>

```csharp
private void ResetRely()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.resetValidate"></a>

```csharp
private void ResetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TableConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableConstraint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TableConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TableConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TableConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TableConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties">ForeignKeyProperties</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference">TableConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput">DeferrableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enableInput">EnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput">EnforcedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput">ForeignKeyPropertiesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput">InitiallyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.relyInput">RelyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.validateInput">ValidateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.deferrable">Deferrable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.initially">Initially</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.rely">Rely</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.validate">Validate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ForeignKeyProperties`<sup>Required</sup> <a name="ForeignKeyProperties" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties"></a>

```csharp
public TableConstraintForeignKeyPropertiesOutputReference ForeignKeyProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.timeouts"></a>

```csharp
public TableConstraintTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference">TableConstraintTimeoutsOutputReference</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DeferrableInput`<sup>Optional</sup> <a name="DeferrableInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput"></a>

```csharp
public bool|IResolvable DeferrableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enableInput"></a>

```csharp
public bool|IResolvable EnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput"></a>

```csharp
public bool|IResolvable EnforcedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForeignKeyPropertiesInput`<sup>Optional</sup> <a name="ForeignKeyPropertiesInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput"></a>

```csharp
public TableConstraintForeignKeyProperties ForeignKeyPropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitiallyInput`<sup>Optional</sup> <a name="InitiallyInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput"></a>

```csharp
public string InitiallyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RelyInput`<sup>Optional</sup> <a name="RelyInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.relyInput"></a>

```csharp
public bool|IResolvable RelyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.timeoutsInput"></a>

```csharp
public IResolvable|TableConstraintTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.validateInput"></a>

```csharp
public bool|IResolvable ValidateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Deferrable`<sup>Required</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.deferrable"></a>

```csharp
public bool|IResolvable Deferrable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Initially`<sup>Required</sup> <a name="Initially" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.initially"></a>

```csharp
public string Initially { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rely`<sup>Required</sup> <a name="Rely" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.rely"></a>

```csharp
public bool|IResolvable Rely { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.validate"></a>

```csharp
public bool|IResolvable Validate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableConstraintConfig <a name="TableConstraintConfig" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Columns,
    string Name,
    string TableId,
    string Type,
    string Comment = null,
    bool|IResolvable Deferrable = null,
    bool|IResolvable Enable = null,
    bool|IResolvable Enforced = null,
    TableConstraintForeignKeyProperties ForeignKeyProperties = null,
    string Id = null,
    string Initially = null,
    bool|IResolvable Rely = null,
    TableConstraintTimeouts Timeouts = null,
    bool|IResolvable Validate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns">Columns</a></code> | <code>string[]</code> | Columns to use in constraint key. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.name">Name</a></code> | <code>string</code> | Name of constraint. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId">TableId</a></code> | <code>string</code> | Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id). |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.type">Type</a></code> | <code>string</code> | Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment">Comment</a></code> | <code>string</code> | Comment for the table constraint. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable">Deferrable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Whether the constraint is deferrable. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Whether the constraint is enforced. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties">ForeignKeyProperties</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | foreign_key_properties block. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#id TableConstraint#id}. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially">Initially</a></code> | <code>string</code> | (Default: `DEFERRED`) Whether the constraint is initially deferred or immediate. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely">Rely</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate">Validate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Specifies whether to validate existing data on the table when a constraint is created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

Columns to use in constraint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#name TableConstraint#name}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#type TableConstraint#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comment for the table constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#comment TableConstraint#comment}

---

##### `Deferrable`<sup>Optional</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable"></a>

```csharp
public bool|IResolvable Deferrable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Whether the constraint is deferrable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#deferrable TableConstraint#deferrable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#enable TableConstraint#enable}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Whether the constraint is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#enforced TableConstraint#enforced}

---

##### `ForeignKeyProperties`<sup>Optional</sup> <a name="ForeignKeyProperties" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties"></a>

```csharp
public TableConstraintForeignKeyProperties ForeignKeyProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

foreign_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#id TableConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Initially`<sup>Optional</sup> <a name="Initially" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially"></a>

```csharp
public string Initially { get; set; }
```

- *Type:* string

(Default: `DEFERRED`) Whether the constraint is initially deferred or immediate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#initially TableConstraint#initially}

---

##### `Rely`<sup>Optional</sup> <a name="Rely" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely"></a>

```csharp
public bool|IResolvable Rely { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#rely TableConstraint#rely}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.timeouts"></a>

```csharp
public TableConstraintTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#timeouts TableConstraint#timeouts}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate"></a>

```csharp
public bool|IResolvable Validate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Specifies whether to validate existing data on the table when a constraint is created.

Only used in conjunction with the ENABLE property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#validate TableConstraint#validate}

---

### TableConstraintForeignKeyProperties <a name="TableConstraintForeignKeyProperties" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintForeignKeyProperties {
    TableConstraintForeignKeyPropertiesReferences References,
    string Match = null,
    string OnDelete = null,
    string OnUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references">References</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | references block. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match">Match</a></code> | <code>string</code> | (Default: `FULL`) The match type for the foreign key. Not applicable for primary/unique keys. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete">OnDelete</a></code> | <code>string</code> | (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is deleted. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate">OnUpdate</a></code> | <code>string</code> | (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is updated. |

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references"></a>

```csharp
public TableConstraintForeignKeyPropertiesReferences References { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#references TableConstraint#references}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

(Default: `FULL`) The match type for the foreign key. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#match TableConstraint#match}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete"></a>

```csharp
public string OnDelete { get; set; }
```

- *Type:* string

(Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is deleted.

Not applicable for primary/unique keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#on_delete TableConstraint#on_delete}

---

##### `OnUpdate`<sup>Optional</sup> <a name="OnUpdate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate"></a>

```csharp
public string OnUpdate { get; set; }
```

- *Type:* string

(Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is updated.

Not applicable for primary/unique keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#on_update TableConstraint#on_update}

---

### TableConstraintForeignKeyPropertiesReferences <a name="TableConstraintForeignKeyPropertiesReferences" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintForeignKeyPropertiesReferences {
    string[] Columns,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns">Columns</a></code> | <code>string[]</code> | Columns to use in foreign key reference. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId">TableId</a></code> | <code>string</code> | Name of constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

Columns to use in foreign key reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

### TableConstraintTimeouts <a name="TableConstraintTimeouts" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#create TableConstraint#create}. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#delete TableConstraint#delete}. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#read TableConstraint#read}. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#update TableConstraint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#create TableConstraint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#delete TableConstraint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#read TableConstraint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/table_constraint#update TableConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableConstraintForeignKeyPropertiesOutputReference <a name="TableConstraintForeignKeyPropertiesOutputReference" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintForeignKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences">PutReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate">ResetOnUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferences` <a name="PutReferences" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences"></a>

```csharp
private void PutReferences(TableConstraintForeignKeyPropertiesReferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete"></a>

```csharp
private void ResetOnDelete()
```

##### `ResetOnUpdate` <a name="ResetOnUpdate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate"></a>

```csharp
private void ResetOnUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references">References</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput">OnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput">OnUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput">ReferencesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete">OnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate">OnUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references"></a>

```csharp
public TableConstraintForeignKeyPropertiesReferencesOutputReference References { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput"></a>

```csharp
public string OnDeleteInput { get; }
```

- *Type:* string

---

##### `OnUpdateInput`<sup>Optional</sup> <a name="OnUpdateInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput"></a>

```csharp
public string OnUpdateInput { get; }
```

- *Type:* string

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput"></a>

```csharp
public TableConstraintForeignKeyPropertiesReferences ReferencesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete"></a>

```csharp
public string OnDelete { get; }
```

- *Type:* string

---

##### `OnUpdate`<sup>Required</sup> <a name="OnUpdate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate"></a>

```csharp
public string OnUpdate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public TableConstraintForeignKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---


### TableConstraintForeignKeyPropertiesReferencesOutputReference <a name="TableConstraintForeignKeyPropertiesReferencesOutputReference" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintForeignKeyPropertiesReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue"></a>

```csharp
public TableConstraintForeignKeyPropertiesReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---


### TableConstraintTimeoutsOutputReference <a name="TableConstraintTimeoutsOutputReference" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableConstraintTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TableConstraintTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---



